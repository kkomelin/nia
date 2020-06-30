(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@storybook/addon-actions", "react", "./Button", "../../styles/init.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@storybook/addon-actions"), require("react"), require("./Button"), require("../../styles/init.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.addonActions, global.react, global.Button, global.init);
    global.undefined = mod.exports;
  }
})(this, function (exports, _addonActions, _react, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.disabled = exports.sizes = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _Button2 = _interopRequireDefault(_Button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    component: _Button2.default,
    title: 'Button'
  };

  const sizes = exports.sizes = () => /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_Button2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "small"
  }, "Small")), /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_Button2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "normal"
  }, "Normal")), /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_Button2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "big"
  }, "Big")));

  const disabled = exports.disabled = () => /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_Button2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    disabled: true,
    size: "small"
  }, "Small Disabled")), /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_Button2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    disabled: true,
    size: "normal"
  }, "Normal Disabled")), /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_Button2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    disabled: true,
    size: "big"
  }, "Big Disabled")));
});
//# sourceMappingURL=Button.stories.js.map