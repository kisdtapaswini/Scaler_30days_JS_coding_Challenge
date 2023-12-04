const createLoginProxy = (target) => {
    return new Proxy(target, {
        get: (obj, prop) => {
            return obj[prop];
        }

    });
};

const originalObj = {a:10, b:20, c:30};
const loginProxy = createLoginProxy(originalObj);
console.log(loginProxy.a);
console.log(loginProxy.b);