export function personUpdate(data) {
    if (data.gender == 'female') {
        delete data.age;
        return data;
    }
    if (data.gender == 'male') {
        if (data.income == undefined) data.income = 100000;
        return data;
    }
}

export function objectFieldsList(obj1, obj2, obj3) {
    let array = [];
    for (let key in obj1) array.push(key);
    for (let key in obj2) array.push(key);
    for (let key in obj3) array.push(key);
    return array.sort();
}

export function objectClone(obj, count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        let dest = JSON.parse(JSON.stringify(obj));
        dest.id = i;
        result.push(dest);
    }
    return result;
}
