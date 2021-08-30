function MVVM(options) {
    //将配置对象 保存到vm上取
    this.$options = options || {};
    //将data对象保存到vm和局部变量data上
    var data = this._data = this.$options.data;
    //将vm保存到变量me上
    var me = this;

    // 数据代理
    // 实现 vm.xxx -> vm._data.xxx
    // 遍历data中的所有属性
    Object.keys(data).forEach(function(key) {   
        //对当前属性实现数据代理
        me._proxyData(key);
    });

    this._initComputed();

    observe(data, this);

    //创建一个编译对象(编译模板)
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    constructor: MVVM,
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    _proxyData: function(key, setter, getter) {
        var me = this;
        setter = setter || 

        //给vm添加指定的属性
        Object.defineProperty(me, key, {
            configurable: false,  //不可重新定义，防止外界更改
            enumerable: true,    //可以枚举遍历

            //当通过vm.xxx读取属性值的时候自动调用
            get: function proxyGetter() {
                //读取data中对应的属性值返回
                return me._data[key];
            },

            //当通过vm.xxx = value修改属性值的时候自动调用
            set: function proxySetter(newVal) {

                //将新的值保存到data对应属性上
                me._data[key] = newVal;
            }
        });
    },

    _initComputed: function() {
        var me = this;
        var computed = this.$options.computed;
        if (typeof computed === 'object') {
            Object.keys(computed).forEach(function(key) {
                Object.defineProperty(me, key, {
                    get: typeof computed[key] === 'function' 
                            ? computed[key] 
                            : computed[key].get,
                    set: function() {}
                });
            });
        }
    }
};