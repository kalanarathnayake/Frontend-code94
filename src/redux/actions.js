export const saveProduct = (object) => {
    return (dispatch) => {
      fetch('http://localhost:8000/product/add/', {
        method: 'POST',
        body: JSON.stringify(object),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SAVE_OBJECT_SUCCESS', payload: data });
      })
      .catch(error => {
        dispatch({ type: 'SAVE_OBJECT_ERROR', payload: error });
      });
    };
  };

export const fetchObjects = () => {
return (dispatch) => {
    fetch('http://localhost:8000/product/') 
    .then(response => response.json())
    .then(data => {
    dispatch({ type: 'FETCH_OBJECTS_SUCCESS', payload: data });
    })
    .catch(error => {
    dispatch({ type: 'FETCH_OBJECTS_ERROR', payload: error });
    });
};
};

export const editObjects = () => {
return (dispatch) => {
    fetch('http://localhost:8000/product/',) 
    .then(response => response.json())
    .then(data => {
    dispatch({ type: 'FETCH_OBJECTS_SUCCESS', payload: data });
    })
    .catch(error => {
    dispatch({ type: 'FETCH_OBJECTS_ERROR', payload: error });
    });
};
};

export const deleteObjects = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:8000/product/${id}`,{method: 'DELETE',}) 
        .then(response => response.json())
        .then(data => {
            fetchObjects()
        // dispatch({ type: 'FETCH_OBJECTS_SUCCESS', payload: data });
        })
        .catch(error => {
        dispatch({ type: 'FETCH_OBJECTS_ERROR', payload: error });
        });
    };
    };
  
  