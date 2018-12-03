  //浅拷贝
  var obj = {
    a: 10,
    b: 20,
    c: 30
  };
  var obj2 = obj;
  obj2.b = 100;
  console.log(obj); //{a:10,b:100,c:30}
  console.log(obj2); //{a:10,b:100,c:30}
  //这里是把obj对象赋值给obj2，改变obj2的属性b，根obj的属性b也会被改变,这是浅拷贝

  //深拷贝
  var obj3 = {
    a: 10,
    b: 20,
    c: 30
  };
  var obj4 = {
    a: obj3.a,
    b: obj3.b,
    c: obj.c
  };
  obj4.b = 200;
  console.log(obj3); //{a:10,b:20,c:30}
  console.log(obj4); //{a:10,b:200,c:30}
  //上面这种赋值就是深拷贝，不会改变到obj3的属性值。

  /*浅拷贝只是复制某个对象的指针，而不是复制对象本身，新旧对象还是共享一块内存。但深拷贝会创造另外一个一摸一样的对象，新对象跟原来的对象不共享内存，修改新对象不会修改到原对象。*/

  ////浅拷贝的实现方式
  function simpleClone(pasteObj) {
    var obj = {}; //声明一个空对象
    for (var i in pasteObj) {
      console.log(pasteObj[i]); //遍历对象
      obj[i] = pasteObj[i];
    }
    return obj;
  }

  var Obj = {
    a: 10,
    b: {
      a: 10,
      b: 20
    },
    c: ["a", "b", "c", "d"]
  };

  var newObj = simpleClone(Obj);
  console.log(newObj); //输出与Obj一样的对象
  newObj.b.a = 30; //设置新对象b属性下的a属性为30
  console.log(Obj, newObj) //输出30  原对象与现对象均被更改

  newObj.c.push("e");
  console.log(Obj, newObj); //Obj与newObj的c属性 数组都添加一个新元素"e"
  console.log(Obj.c); //["a", "b", "c", "d", "e"]


  function getRequest() {
    let url = '?openid=zheshiopenida&role=wangzherongyao&nickname=libai&level=1'
    // let url = location.search
    let theRequest = new Object()
    if (url.indexOf('?') !== -1) {
      let str = url.substr(1)
      let strs = str.split('&')
      for (let i = 0; i < strs.length; i++) {
        theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
      }
    }
    return theRequest
  }

  let request = getRequest()
  let a = request['role']
  let b = request['openid']
  let c = request['nickname']
  let d = request['level']
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)