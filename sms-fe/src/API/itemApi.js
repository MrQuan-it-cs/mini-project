import createApi from "./createAPI"

export  const itemApi={
    getList: createApi({
        url:'http://localhost:8080/api/v1/student',
        method:'GET'
    }),
    postItem: createApi({
        url:'http://localhost:8080/api/v1/student',
        method:'POST'
    }),
    putItem: createApi({
        url:'http://localhost:8080/api/v1/student/:id',
        method:'PUT'
    }),
    deleteItem: createApi({
        url:'http://localhost:8080/api/v1/student/:id',
        method:'DELETE'
    })
}