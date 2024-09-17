var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
var SvgPauseIcon = function (props) { return (_jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 9 14" }, props, { children: _jsx("path", { fill: "#fff", d: "M2.89 0H0v13.333h2.89zM8.78 0H5.89v13.333h2.89z" }) }))); };
export default SvgPauseIcon;
