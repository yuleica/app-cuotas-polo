import React from 'react';

export const MostrarCuotas = ({book, books, setListUpdated, setBook}) => {

    const handleDelete = (id) => {
        const requestInit = {
            method: 'DELETE' 
        }

        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.json() )
        //.then(res => console.log(res))

        setListUpdated(true)
    };

    const handleUpdated = (id) => {
        let {titulo, Autor, edicion} = book;
        edicion = parseInt(edicion, 10);
        //validacion
        if (titulo === " " || Autor === " " || edicion <= 0) {
            alert("los campos son obligatorios")
            console.log('debes llenar todos los datos')
            return
        };

        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)             
        }

        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.json() )
        //.then(res => console.log(res))
        //reinicio el state del libro
        setBook = ({
            titulo: '',
            autor: '',
            edicion: 0
          });

        setListUpdated(true)
    }

    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>TITULO</th>
                        <th>AUTOR</th>
                        <th>EDICION</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map( book => 
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.titulo}</td>
                            <td>{book.Autor}</td>
                            <td>{book.edicion}</td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(book.id)} className="btn btn-danger">Borrar</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdated(book.id)} className="btn btn-dark">Modificar</button>
                            </div>

                        </tr>
                    )}
                </tbody>
            </table>
            
        </div>
    )
}

export default MostrarCuotas;