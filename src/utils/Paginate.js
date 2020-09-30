import _ from 'lodash';

export const paginate = (items, curentPage, pageSize) =>{
    let startIndex = (curentPage - 1) * pageSize;

    let movies = _.slice(items, startIndex);
    movies = _.take(movies, pageSize);
    return [...movies];

}