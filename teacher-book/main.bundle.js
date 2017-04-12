webpackJsonp([1,4],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "table, th, td {\n    border: 1px solid black;\n    border-collapse: collapse;\n}\ntd {\n    max-width: 60px;\n}\n.book-header {\n    background-color: orangered;\n}\n.book-header th {\n    padding: 10px;\n    cursor: pointer;\n}\n.student-name {\n    width: 300px;\n    text-align: left;\n    padding: 5px;\n    background-color: lightblue;\n}\n.rating {\n    width: 60px;\n    text-align: center;\n    height: 60px;\n}\n.rating-field {\n    width: 20px;\n}\n.new-student {\n    text-align: left;\n}\n.delete-student {\n    width: 20px;\n    padding: 2px;\n    background-color: crimson;\n    border-radius: 50%;\n    border: 1px solid transparent;\n    float: right;\n    color: white;    \n}\n.add {\n    width: 20px;\n    background-color: lightblue;\n    border-radius: 50%;\n    padding: 2px;\n    border: 1px solid transparent;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports = "<app-teacher-book></app-teacher-book>"

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<!--<input type=\"text\" [(ngModel)]=\"_vm.statValuesIndex\">-->\n<table>\n  <thead class=\"book-header\">\n    <tr>\n      <th>\n      </th>\n      <th *ngFor=\"let lesson of vm.lessons; \" (mouseover)=\"display($event, lesson)\">\n        {{lesson}}\n      </th>\n      <th>\n        <button (click)=\"addLesson()\" class=\"add\">+</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let student of vm.students\" >\n      <th class=\"student-name\">\n        {{student.name}}\n        <button (click)=\"deleteStudent(student.name)\" class=\"delete-student\">X</button>\n      </th>\n      <td *ngFor=\"let value of student.values; let i = index;\" class=\"rating\">\n        <span *ngIf=\"value\">\n          {{value}}\n        </span>\n        <span *ngIf=\"!value\">\n          <input #valueInput type=\"text\" class=\"rating-field\">\n          <button (click)=\"addValue(student.name,i+1, valueInput.value)\" class=\"add\">+</button>\n\n        </span>\n        <span *ngIf=\"vm.statValuesIndex == i+1\" class=\"stat\">\n          ({{student.stat}})\n        </span>\n      </td>\n      <td></td>\n    </tr>\n    <tr>\n      <th class=\"new-student\">\n        <input type=\"text\" [(ngModel)]=\"newStudentName\">\n        <button (click)=\"addStudent()\">Add</button>\n      </th>\n      <td *ngFor=\"let lesson of vm.lessons\"></td>\n      <td></td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 69;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(84);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Absence; });
var Absence = (function () {
    function Absence(studentName, lessonNumber) {
        this._lessonNumber = lessonNumber;
        this._studentName = studentName;
    }
    Object.defineProperty(Absence.prototype, "studentName", {
        get: function () {
            return this._studentName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Absence.prototype, "lessonNumber", {
        get: function () {
            return this._lessonNumber;
        },
        enumerable: true,
        configurable: true
    });
    return Absence;
}());

//# sourceMappingURL=absence.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(141),
        styles: [__webpack_require__(138)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teacher_book_teacher_book_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__teacher_book_teacher_book_component__["a" /* TeacherBookComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating; });
var Rating = (function () {
    function Rating(studentName, lessonNumber, value) {
        this._lessonNumber = lessonNumber;
        this._studentName = studentName;
        this._value = value;
    }
    Object.defineProperty(Rating.prototype, "studentName", {
        get: function () {
            return this._studentName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rating.prototype, "lessonNumber", {
        get: function () {
            return this._lessonNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rating.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return Rating;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherAssistant; });
var TeacherAssistant = (function () {
    function TeacherAssistant() {
    }
    TeacherAssistant.prototype.calculateStatistic = function (teacherBook, maxLessonToInclude) {
        var statisticByStudentName = new Map();
        for (var _i = 0, _a = teacherBook.studentsNames; _i < _a.length; _i++) {
            var studentName = _a[_i];
            var sum = 0;
            for (var lessonNumber = 1; lessonNumber <= maxLessonToInclude && lessonNumber <= teacherBook.lessonsCount; lessonNumber++) {
                var rating = teacherBook.getRating(studentName, lessonNumber);
                if (rating) {
                    sum += rating;
                }
            }
            statisticByStudentName.set(studentName, sum / Math.min(maxLessonToInclude, teacherBook.lessonsCount));
        }
        return statisticByStudentName;
    };
    return TeacherAssistant;
}());

//# sourceMappingURL=teacher-assistant.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rating__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__absence__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherBook; });


var TeacherBook = (function () {
    function TeacherBook() {
        this._studentsNames = [];
        this._ratings = [];
        this._absences = [];
        this._lessonsCount = 0;
    }
    Object.defineProperty(TeacherBook.prototype, "studentsNames", {
        get: function () {
            return this._studentsNames;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeacherBook.prototype, "lessonsCount", {
        get: function () {
            return this._lessonsCount;
        },
        enumerable: true,
        configurable: true
    });
    TeacherBook.prototype.addStudent = function (studentName) {
        this._studentsNames.push(studentName);
    };
    TeacherBook.prototype.addLesson = function () {
        this._lessonsCount++;
    };
    TeacherBook.prototype.setRating = function (studentName, lessonNumber, value) {
        this._ratings.push(new __WEBPACK_IMPORTED_MODULE_0__rating__["a" /* Rating */](studentName, lessonNumber, value));
    };
    TeacherBook.prototype.setAbsence = function (studentName, lessonNumber) {
        this._absences.push(new __WEBPACK_IMPORTED_MODULE_1__absence__["a" /* Absence */](studentName, lessonNumber));
    };
    TeacherBook.prototype.removeStudent = function (studentName) {
        this._studentsNames = this._studentsNames.filter(function (sn) { return sn != studentName; });
        this._ratings = this._ratings.filter(function (r) { return r.studentName != studentName; });
        this._absences = this._absences.filter(function (a) { return a.studentName != studentName; });
    };
    TeacherBook.prototype.getRating = function (studentName, lessonNumber) {
        var rating = this._ratings.find(function (r) { return r.studentName == studentName && r.lessonNumber == lessonNumber; });
        return rating ? rating.value : null;
    };
    TeacherBook.prototype.isAbsend = function (studentName, lessonNumber) {
        var isAbsend = this._absences.find(function (a) { return a.studentName == studentName && a.lessonNumber == lessonNumber; });
        return !!isAbsend;
    };
    return TeacherBook;
}());

//# sourceMappingURL=teacher-book.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teacher_book__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_assistant__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherBookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeacherBookComponent = (function () {
    function TeacherBookComponent() {
        this._teacherAssistant = new __WEBPACK_IMPORTED_MODULE_2__teacher_assistant__["a" /* TeacherAssistant */]();
        this._teacherBook = new __WEBPACK_IMPORTED_MODULE_1__teacher_book__["a" /* TeacherBook */]();
        this._teacherBook.addLesson();
        this._teacherBook.addLesson();
        this._teacherBook.addLesson();
        this._teacherBook.addLesson();
        this._teacherBook.addStudent("Александр");
        this._teacherBook.addStudent("Николай");
        this._teacherBook.setAbsence("Александр", 2);
        this._teacherBook.setRating("Николай", 2, 1);
        this._vm = { statValuesIndex: 0 };
    }
    TeacherBookComponent.prototype.updateVm = function (oldVm, teacherBook) {
        var newVM = oldVm;
        newVM.lessons = [];
        for (var i = 1; i <= teacherBook.lessonsCount; i++) {
            newVM.lessons.push(i);
        }
        var stat = this._teacherAssistant.calculateStatistic(this._teacherBook, newVM.statValuesIndex);
        newVM.students = teacherBook.studentsNames.map(function (studentName) {
            var values = [];
            for (var lessonNumber = 1; lessonNumber <= teacherBook.lessonsCount; lessonNumber++) {
                var rating = teacherBook.getRating(studentName, lessonNumber);
                var absence = teacherBook.isAbsend(studentName, lessonNumber);
                var value = rating ? rating.toString() : absence ? "Н" : null;
                values.push(value);
            }
            return {
                name: studentName,
                values: values,
                stat: stat.get(studentName)
            };
        });
        return newVM;
    };
    TeacherBookComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TeacherBookComponent.prototype, "vm", {
        get: function () {
            this._vm = this.updateVm(this._vm, this._teacherBook);
            return this._vm;
        },
        enumerable: true,
        configurable: true
    });
    TeacherBookComponent.prototype.addStudent = function () {
        this._teacherBook.addStudent(this.newStudentName);
    };
    TeacherBookComponent.prototype.addLesson = function () {
        this._teacherBook.addLesson();
    };
    TeacherBookComponent.prototype.addValue = function (studentName, lessonNumber, value) {
        if (!value) {
            return;
        }
        else if (+value) {
            this._teacherBook.setRating(studentName, lessonNumber, +value);
        }
        else {
            this._teacherBook.setAbsence(studentName, lessonNumber);
        }
    };
    TeacherBookComponent.prototype.deleteStudent = function (studentName) {
        this._teacherBook.removeStudent(studentName);
    };
    TeacherBookComponent.prototype.display = function (e, lesson) {
        this._vm.statValuesIndex = lesson;
    };
    return TeacherBookComponent;
}());
TeacherBookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-teacher-book',
        template: __webpack_require__(142),
        styles: [__webpack_require__(139)]
    }),
    __metadata("design:paramtypes", [])
], TeacherBookComponent);

//# sourceMappingURL=teacher-book.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[167]);
//# sourceMappingURL=main.bundle.js.map