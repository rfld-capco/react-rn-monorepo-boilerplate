import groups from './example.json';

var API = (function() {
    const entities = {
        groups: 'groups' //call the mock.json as this entity name
    };

    const getElements = (entity) => {
        switch (entity) {
            case entities.groups:
                return groups;
            default:
                return null;
        }
    };

    const getElement = (entity, id) => {
        var element = null;
        getElements(entity).array.forEach((el) => {
            if (el.id === id) {
                element = el;
            }
        });
        return element;
    };

    const getAll = (entity, types) => {
        console.log('MOCK API GET ALL ' + entity);
        return {
            type: types[1],
            payload: getElements(entity)
        };
    };

    const getOne = (entity, id, types) => {
        console.log('MOCK API GET ONE ' + entity + ' id:' + id);
        var element = getElement(entity, id);
        if (element !== null) {
            return {
                type: types[1],
                payload: element
            };
        }
        return {
            type: types[2],
            payload: 'Element not found'
        };
    };

    const post = (entity, data, types) => {
        console.log('MOCK API POST ' + entity);
        return {
            type: types[1],
            payload: getElements(entity)[0]
        };
    };

    const put = (entity, data, id, types) => {
        console.log('MOCK API PUT ' + entity + ' id:' + id);
        var element = getElement(entity, id);
        if (element !== null) {
            return patch(entity, data, id, types);
        }
        return post(entity, data, types);
    };

    const patch = (entity, data, id, types) => {
        console.log('MOCK API PATCH ' + entity + ' id:' + id);
        var element = getElement(entity, id);
        if (element !== null) {
            return {};
        }
        return {
            type: types[2],
            payload: 'Element not found'
        };
    };

    const deleteOne = (entity, id, types) => {
        console.log('MOCK API DELETE ' + entity + ' id:' + id);
        var element = getElement(entity, id);
        if (element !== null) {
            return {};
        }
        return {
            type: types[2],
            payload: 'Element not found'
        };
    };

    return {getAll, getOne, post, put, patch, deleteOne, entities};
})();

export default API;
