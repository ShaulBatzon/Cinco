import { gigs } from "../assets/data/cinco.js";
import { users } from "../assets/data/users.js";

export const storageService = {
<<<<<<< HEAD
    query,
    get,
    post,
    put,
    remove,
}

let orders = []



function query(entityType,delay = 1200) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    let searchParams = new URLSearchParams(window.location.search)
    if( searchParams.has('filterBy')){
        let filterBy = searchParams.get('filterBy')
           if(filterBy){
      var tags = entities.filter(entity=>
        entity.tags.find((tag)=>
         tag === filterBy
        )
        )
        entities = tags
      }
=======
  query,
  get,
  post,
  put,
  remove,
  getBySeller,
};

let orders = [];

function query(entityType, delay = 1200) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || [];
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("filterBy")) {
    let filterBy = searchParams.get("filterBy");
    if (filterBy) {
      var tags = entities.filter((entity) =>
        entity.tags.find((tag) => tag === filterBy)
      );
      entities = tags;
>>>>>>> cf0d805af6d141b00a838afe115579d4efe19d76
    }
  }

  if (entities && !entities.length) {
    if (entityType === "gigs") _save(entityType, gigs);
    else if (entityType === "orders") {
      _save(entityType, orders);
    } else _save(entityType, users);
    entities = JSON.parse(localStorage.getItem(entityType));
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject('OOOOPs')
      resolve(entities);
    }, delay);
  });
  // return Promise.resolve(entities)
}

async function get(entityType, entityId) {
  return await query(entityType).then((entities) =>
    entities.find((entity) => entity._id === entityId)
  );
}

async function getBySeller(entityType, entityId) {
  return await query(entityType).then((entities) =>
    entities.find((entity) => entity.seller._id === entityId)
  );
}

function post(entityType, newEntity) {
  newEntity._id = _makeId();
  return query(entityType).then((entities) => {
    entities.push(newEntity);
    _save(entityType, entities);
    return newEntity;
  });
}

function put(entityType, updatedEntity) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex(
      (entity) => entity._id === updatedEntity._id
    );
    entities.splice(idx, 1, updatedEntity);
    _save(entityType, entities);
    return updatedEntity;
  });
}

function remove(entityType, entityId) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === entityId);
    entities.splice(idx, 1);
    _save(entityType, entities);
  });
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}

function _makeId(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
