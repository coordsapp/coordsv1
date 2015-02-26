module.exports = function (env)
{
    env.Util = {};
    env.Util.isString = function(obj){ return typeof(obj)==="string"; };
    env.Util.isBoolean = function(obj){ return typeof(obj)==="boolean"; };
    env.Util.isNumber = function(obj){ return typeof(obj)==="number"; };
    env.Util.isUndefined = function(obj){ return typeof(obj)==="undefined"; };
    env.Util.isLatitude = function(obj){
        if( env.Util.isNumber(obj) )
            if( obj<90 && obj>-90 )
                return true;
        return false;
    };
    env.Util.isLongitude = function(obj){
        if( env.Util.isNumber(obj) )
            if( obj<180 && obj>-180 )
                return true;
        return false;
    };
    env.Util.isHex = function(obj){
        if( env.Util.isString(obj) ) {
            if (/^[0-9A-F]+$/i.test(obj)) {
                return true;
            }
        }
        return false;
    };
};