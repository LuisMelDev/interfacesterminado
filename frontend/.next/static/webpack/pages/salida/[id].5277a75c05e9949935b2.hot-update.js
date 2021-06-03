self["webpackHotUpdate_N_E"]("pages/salida/[id]",{

/***/ "./pages/salida/[id].js":
/*!******************************!*\
  !*** ./pages/salida/[id].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Layout */ "./components/Layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var components_cards_MostrarSalida__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/cards/MostrarSalida */ "./components/cards/MostrarSalida.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\pages\\salida\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n    mutation salidaEstacionamiento($id: ID!) {\n        salidaEstacionamiento(id: $id) {\n            cedula\n            nombre\n            horaEntrada\n            horaSalida\n            montoPagado\n            vehiculo {\n                placa\n                tipo\n            }\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n    query obtenerVehiculoEstacionado($id: ID!) {\n        obtenerVehiculoEstacionado(id: $id) {\n            cedula\n            nombre\n            horaEntrada\n            horaSalida\n            montoPagado\n            vehiculo {\n                placa\n                tipo\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.gql)(_templateObject());
var mutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.gql)(_templateObject2());

var SalidaPage = function SalidaPage() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  var id = router.query.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),
      salida = _useState[0],
      setSalida = _useState[1];

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation)(mutation),
      _useMutation2 = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 1),
      registrarSalida = _useMutation2[0];

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useQuery)(query, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data;

  if (!data) return null; // console.log(data)

  var _data$obtenerVehiculo = data.obtenerVehiculoEstacionado,
      vehiculo = _data$obtenerVehiculo.vehiculo,
      cedula = _data$obtenerVehiculo.cedula,
      nombre = _data$obtenerVehiculo.nombre,
      horaEntrada = _data$obtenerVehiculo.horaEntrada,
      horaSalida = _data$obtenerVehiculo.horaSalida;

  var salidaVehiculo = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var _yield$registrarSalid, data;

      return C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return registrarSalida({
                variables: {
                  id: id
                }
              });

            case 2:
              _yield$registrarSalid = _context.sent;
              data = _yield$registrarSalid.data;

              if (data) {
                setSalida(data.salidaEstacionamiento);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function salidaVehiculo() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "px-5 py-5 border-gray-200 border-b mb-2 bg-white",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-gray-900 text-2xl font-semibold",
        children: "Registrar Salida"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-5 p-5 mt-3 bg-white shadow-lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-2xl font-bold mb-3",
        children: "Informacion del Vehiculo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, _this), salida ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_cards_MostrarSalida__WEBPACK_IMPORTED_MODULE_8__.default, {
          cedula: salida.cedula,
          nombre: salida.nombre,
          horaEntrada: salida.horaEntrada,
          horaSalida: salida.horaEntrada,
          vehiculo: salida.vehiculo,
          montoPagado: salida.vehiculo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "mt-3 px-3 py-2 bg-gray-800 text-white rounded-md block",
            children: "Volver a Estacionamiento"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }, _this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_cards_MostrarSalida__WEBPACK_IMPORTED_MODULE_8__.default, {
          cedula: cedula,
          nombre: nombre,
          horaEntrada: horaEntrada,
          vehiculo: vehiculo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: salidaVehiculo,
          className: "mt-3 px-3 py-2 bg-gray-800 text-white rounded-md block",
          children: "Aceptar salida"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 25
        }, _this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }, _this);
};

_s(SalidaPage, "uqf/bO36AE/Uq0vCj+ndr+4yP8w=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useQuery];
});

_c = SalidaPage;
/* harmony default export */ __webpack_exports__["default"] = (SalidaPage);

var _c;

$RefreshReg$(_c, "SalidaPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2FsaWRhL1tpZF0uanMiXSwibmFtZXMiOlsicXVlcnkiLCJncWwiLCJtdXRhdGlvbiIsIlNhbGlkYVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInVzZVN0YXRlIiwic2FsaWRhIiwic2V0U2FsaWRhIiwidXNlTXV0YXRpb24iLCJyZWdpc3RyYXJTYWxpZGEiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJvYnRlbmVyVmVoaWN1bG9Fc3RhY2lvbmFkbyIsInZlaGljdWxvIiwiY2VkdWxhIiwibm9tYnJlIiwiaG9yYUVudHJhZGEiLCJob3JhU2FsaWRhIiwic2FsaWRhVmVoaWN1bG8iLCJzYWxpZGFFc3RhY2lvbmFtaWVudG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLG9EQUFILG1CQUFYO0FBZUEsSUFBTUMsUUFBUSxHQUFHRCxvREFBSCxvQkFBZDs7QUFnQkEsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRHFCLE1BRWJDLEVBRmEsR0FFTkYsTUFBTSxDQUFDSixLQUZELENBRWJNLEVBRmE7O0FBQUEsa0JBR09DLCtDQUFRLENBQUMsSUFBRCxDQUhmO0FBQUEsTUFHZEMsTUFIYztBQUFBLE1BR05DLFNBSE07O0FBQUEscUJBSUtDLDREQUFXLENBQUNSLFFBQUQsQ0FKaEI7QUFBQTtBQUFBLE1BSWRTLGVBSmM7O0FBQUEsa0JBTUpDLHlEQUFRLENBQUNaLEtBQUQsRUFBUTtBQUM3QmEsYUFBUyxFQUFFO0FBQ1BQLFFBQUUsRUFBRkE7QUFETztBQURrQixHQUFSLENBTko7QUFBQSxNQU1iUSxJQU5hLGFBTWJBLElBTmE7O0FBWXJCLE1BQUksQ0FBQ0EsSUFBTCxFQUFXLE9BQU8sSUFBUCxDQVpVLENBYXJCOztBQWJxQiw4QkFlakJBLElBQUksQ0FBQ0MsMEJBZlk7QUFBQSxNQWNiQyxRQWRhLHlCQWNiQSxRQWRhO0FBQUEsTUFjSEMsTUFkRyx5QkFjSEEsTUFkRztBQUFBLE1BY0tDLE1BZEwseUJBY0tBLE1BZEw7QUFBQSxNQWNhQyxXQWRiLHlCQWNhQSxXQWRiO0FBQUEsTUFjMEJDLFVBZDFCLHlCQWMwQkEsVUFkMUI7O0FBa0JyQixNQUFNQyxjQUFjO0FBQUEsaVdBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0lWLGVBQWUsQ0FBQztBQUNuQ0UseUJBQVMsRUFBRTtBQUNQUCxvQkFBRSxFQUFGQTtBQURPO0FBRHdCLGVBQUQsQ0FEbkI7O0FBQUE7QUFBQTtBQUNYUSxrQkFEVyx5QkFDWEEsSUFEVzs7QUFNbkIsa0JBQUlBLElBQUosRUFBVTtBQUNOTCx5QkFBUyxDQUFDSyxJQUFJLENBQUNRLHFCQUFOLENBQVQ7QUFDSDs7QUFSa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZEQsY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFhQSxzQkFDSSw4REFBQyxzREFBRDtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGtEQUFmO0FBQUEsNkJBQ0k7QUFBSSxpQkFBUyxFQUFDLHNDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUk7QUFBSyxlQUFTLEVBQUMsa0NBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUlLYixNQUFNLGdCQUNIO0FBQUEsZ0NBQ0ksOERBQUMsbUVBQUQ7QUFDSSxnQkFBTSxFQUFFQSxNQUFNLENBQUNTLE1BRG5CO0FBRUksZ0JBQU0sRUFBRVQsTUFBTSxDQUFDVSxNQUZuQjtBQUdJLHFCQUFXLEVBQUVWLE1BQU0sQ0FBQ1csV0FIeEI7QUFJSSxvQkFBVSxFQUFFWCxNQUFNLENBQUNXLFdBSnZCO0FBS0ksa0JBQVEsRUFBRVgsTUFBTSxDQUFDUSxRQUxyQjtBQU1JLHFCQUFXLEVBQUVSLE1BQU0sQ0FBQ1E7QUFOeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVNJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDSTtBQUFRLHFCQUFTLEVBQUMsd0RBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSjtBQUFBLHNCQURHLGdCQWlCSDtBQUFBLGdDQUNJLDhEQUFDLG1FQUFEO0FBQ0ksZ0JBQU0sRUFBRUMsTUFEWjtBQUVJLGdCQUFNLEVBQUVDLE1BRlo7QUFHSSxxQkFBVyxFQUFFQyxXQUhqQjtBQUlJLGtCQUFRLEVBQUVIO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU9JO0FBQ0ksaUJBQU8sRUFBRUssY0FEYjtBQUVJLG1CQUFTLEVBQUMsd0RBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQSxzQkFyQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE4Q0gsQ0E3RUQ7O0dBQU1sQixVO1VBQ2FFLGtELEVBR1dLLHdELEVBRVRFLHFEOzs7S0FOZlQsVTtBQStFTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zYWxpZGEvW2lkXS41Mjc3YTc1YzA1ZTk5NDk5MzViMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBncWwsIHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgTW9zdHJhclNhbGlkYSBmcm9tIFwiY29tcG9uZW50cy9jYXJkcy9Nb3N0cmFyU2FsaWRhXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxyXG4gICAgcXVlcnkgb2J0ZW5lclZlaGljdWxvRXN0YWNpb25hZG8oJGlkOiBJRCEpIHtcclxuICAgICAgICBvYnRlbmVyVmVoaWN1bG9Fc3RhY2lvbmFkbyhpZDogJGlkKSB7XHJcbiAgICAgICAgICAgIGNlZHVsYVxyXG4gICAgICAgICAgICBub21icmVcclxuICAgICAgICAgICAgaG9yYUVudHJhZGFcclxuICAgICAgICAgICAgaG9yYVNhbGlkYVxyXG4gICAgICAgICAgICBtb250b1BhZ2Fkb1xyXG4gICAgICAgICAgICB2ZWhpY3VsbyB7XHJcbiAgICAgICAgICAgICAgICBwbGFjYVxyXG4gICAgICAgICAgICAgICAgdGlwb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBtdXRhdGlvbiA9IGdxbGBcclxuICAgIG11dGF0aW9uIHNhbGlkYUVzdGFjaW9uYW1pZW50bygkaWQ6IElEISkge1xyXG4gICAgICAgIHNhbGlkYUVzdGFjaW9uYW1pZW50byhpZDogJGlkKSB7XHJcbiAgICAgICAgICAgIGNlZHVsYVxyXG4gICAgICAgICAgICBub21icmVcclxuICAgICAgICAgICAgaG9yYUVudHJhZGFcclxuICAgICAgICAgICAgaG9yYVNhbGlkYVxyXG4gICAgICAgICAgICBtb250b1BhZ2Fkb1xyXG4gICAgICAgICAgICB2ZWhpY3VsbyB7XHJcbiAgICAgICAgICAgICAgICBwbGFjYVxyXG4gICAgICAgICAgICAgICAgdGlwb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2FsaWRhUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgW3NhbGlkYSwgc2V0U2FsaWRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3JlZ2lzdHJhclNhbGlkYV0gPSB1c2VNdXRhdGlvbihtdXRhdGlvbik7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShxdWVyeSwge1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zdCB7IHZlaGljdWxvLCBjZWR1bGEsIG5vbWJyZSwgaG9yYUVudHJhZGEsIGhvcmFTYWxpZGEgfSA9XHJcbiAgICAgICAgZGF0YS5vYnRlbmVyVmVoaWN1bG9Fc3RhY2lvbmFkbztcclxuXHJcblxyXG4gICAgY29uc3Qgc2FsaWRhVmVoaWN1bG8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZWdpc3RyYXJTYWxpZGEoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHNldFNhbGlkYShkYXRhLnNhbGlkYUVzdGFjaW9uYW1pZW50byk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB5LTUgYm9yZGVyLWdyYXktMjAwIGJvcmRlci1iIG1iLTIgYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICBSZWdpc3RyYXIgU2FsaWRhXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC01IHAtNSBtdC0zIGJnLXdoaXRlIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSW5mb3JtYWNpb24gZGVsIFZlaGljdWxvXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAge3NhbGlkYSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9zdHJhclNhbGlkYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VkdWxhPXtzYWxpZGEuY2VkdWxhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlPXtzYWxpZGEubm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUVudHJhZGE9e3NhbGlkYS5ob3JhRW50cmFkYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFTYWxpZGE9e3NhbGlkYS5ob3JhRW50cmFkYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlaGljdWxvPXtzYWxpZGEudmVoaWN1bG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250b1BhZ2Fkbz17c2FsaWRhLnZlaGljdWxvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC0zIHB4LTMgcHktMiBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb2x2ZXIgYSBFc3RhY2lvbmFtaWVudG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb3N0cmFyU2FsaWRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWR1bGE9e2NlZHVsYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZT17bm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUVudHJhZGE9e2hvcmFFbnRyYWRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoaWN1bG89e3ZlaGljdWxvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzYWxpZGFWZWhpY3Vsb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTMgcHgtMyBweS0yIGJnLWdyYXktODAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjZXB0YXIgc2FsaWRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2FsaWRhUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==