var Deferred=function () {
    this.state='unfulfiled';
    this.promise=new Promise();
};
Deferred.prototype.resolve=function (obj) {
    this.state='fulfiled';
    this.promise.emit('success',obj);
};
Deferred.prototype.reject=function (err) {
    this.state='failed';
    this.promise.emit('error',err);
};
Deferred.prototype.progress=function (data) {
    this.promise.emit('progress',data);
};