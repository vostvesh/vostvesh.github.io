webpackJsonp([1,4],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, ".input-name {\n  padding: 5px;\n}\n.get-teacher-book {\n  padding: 5px;\n  background-color: #02796B;\n  color: white;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "th {\n  padding: 0;\n}\n\n.student-lesson--color-yellow {\n  background-color: #ffffb5;\n}\n\n.teacher-book {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-family: 'Ubuntu Light', sans-serif;\n}\n\n.add-btn {\n  cursor: pointer;\n}\n\n.header_add-btn {\n  background-color: #02796B;\n  color: white;\n  width: 20px;\n  font-size: 20px;\n  line-height: 24px;\n  border-radius: 0px 4px 4px 0px;\n}\n\n.header_add-btn:hover {\n  background-color: #00796b;\n}\n\n.student_name {\n  font-size: 12px;\n  border-spacing: 0;\n  border-collapse: collapse;\n  border: 1px solid #9fabb7;\n  padding: 4px;\n  background-color: #f5f5f5;\n}\n\n.delete-btn {\n  text-align: center;\n  cursor: pointer;\n  font-size: 12px;\n}\n\n.row_delete-btn {\n  color: red;\n}\n\n.student_lesson {\n  font-size: 12px;\n  border-spacing: 0;\n  border-collapse: collapse;\n  border: 1px solid #9fabb7;\n  padding: 4px;\n  text-align: center;\n}\n\n.lesson_input {\n  max-width: 24px;\n  border: none;\n  border-bottom: 1px solid #9fabb7;\n  box-shadow: 0px 0px;\n}\n\n.lesson_add-btn {\n  color: #02796B;\n}\n\n.lesson_add-btn:hover {\n  color: #1a241b\n}\n\n.row_lesson {\n  font-size: 12px;\n  cursor: pointer;\n  background-color: #f5f5f5;\n  border-spacing: 0;\n  border-collapse: collapse;\n  border: 1px solid #9fabb7;\n  min-width: 50px;\n}\n\n.student-name_input-container {\n  margin-top: 4px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.input-container_input {\n  width: 100px;\n  height: 20px;\n  padding: 1px 4px;\n  font-size: 10px;\n}\n\n.input-container_add-btn {\n  background-color: #02796B;\n  color: white;\n  width: 20px;\n  font-size: 20px;\n  line-height: 24px;\n  border-radius: 0px 4px 4px 0px;\n}\n\n.input-container_add-btn--disabled{\n  background-color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports = "<app-assistant-principal></app-assistant-principal>\n"

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isTeacherName()\">\n  <app-teacher-book [teacherName]=\"teacherName\"></app-teacher-book>\n</div>\n<div *ngIf=\"!isTeacherName()\">\n  <input class=\"input-name\" type=\"text\" [(ngModel)]=\"teacherName\" placeholder=\"Please input your name\">\n  <button class=\"get-teacher-book\" (click)=\"renderTeacherBook()\">Get Teacher Book</button> \n</div>\n"

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = "<table class=\"teacher-book\">\n\n  <thead class=\"teacher-book_header\">\n    <tr class=\"header_row\">\n      <th class=\"row_lesson\">\n      </th>\n      <th class=\"row_lesson\" *ngFor=\"let lesson of vm.lessons; let i = index;\" [attr.colspan]=\" i+1 === vm.statValuesIndex ? 2 : 1\" on-mousedown=\"setStatValuesIndex(lesson)\" on-mouseup=\"setStatValuesIndex(0)\">\n        {{lesson}}\n      </th>\n      <th>\n        <div class=\"add-btn header_add-btn\" (click)=\"addLesson()\">+</div>\n      </th>\n    </tr>\n  </thead>\n\n  <tbody class=\"teacher-book_body\">\n    <tr class=\"body_student\" *ngFor=\"let student of vm.students\">\n      <th class=\"student_name\">\n        {{student.name}}\n        <span class=\"delete-btn row_delete-btn delete-btn--btn-sm\" (click)=\"deleteStudent(student.name)\">X</span>\n      </th>\n      <ng-container *ngFor=\"let value of student.values; let i = index;\">\n        <td class=\"student_lesson\" *ngIf=\"i + 1 != vm.statValuesIndex; else renderWithStatistic\">\n          <span *ngIf=\"value\">{{value}}</span>\n          <span *ngIf=\"!value\">\n                <input class=\"lesson_input\"  #valueInput type=\"text\">\n                <span class=\"add-btn lesson_add-btn\" (click)=\"addValue(student.name,i+1, valueInput.value)\">+</span>\n          </span>\n        </td>\n        <ng-template #renderWithStatistic>\n          <td class=\"student_lesson\">\n            <div *ngIf=\"value\">{{value}}</div>\n            <span *ngIf=\"!value\">\n                <input class=\"lesson_input\" #valueInput type=\"text\">\n                <span class=\"add-btn lesson_add-btn\" (click)=\"addValue(student.name,i+1, valueInput.value)\">+</span>\n            </span>\n          </td>\n          <td class=\"student_lesson student-lesson--color-yellow\">\n            <span> {{student.stat}}</span>\n          </td>\n        </ng-template>\n      </ng-container>\n    </tr>\n    <tr>\n      <th>\n        <div class=\"student-name_input-container\">\n          <input placeholder=\"Write student name\" class=\"input input-container_input\" type=\"text\" [(ngModel)]=\"newStudentName\">\n          <div class=\"add-btn input-container_add-btn\" (click)=\"canAddStudent && addStudent()\" [ngClass]=\"{'input-container_add-btn--disabled': !canAddStudent}\">+</div>\n        </div>\n      </th>\n    </tr>\n  </tbody>\n</table>\n\n<button (click)=\"saveTeacherBook()\">Save</button>\n"

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teacher_book__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherBookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TeacherBookService = (function () {
    function TeacherBookService() {
        this.KEY = 'teacherBook';
    }
    TeacherBookService.prototype.setKey = function (key) {
        this.KEY = key;
    };
    TeacherBookService.prototype.isEmpty = function () {
        return localStorage.getItem(this.KEY) === null;
    };
    TeacherBookService.prototype.putTeacherBook = function (tb) {
        localStorage.setItem(this.KEY, JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__teacher_book__["a" /* TeacherBook */].toJson(tb)));
    };
    TeacherBookService.prototype.getTeacherBook = function () {
        var tb = localStorage.getItem(this.KEY);
        if (tb !== null) {
            return __WEBPACK_IMPORTED_MODULE_1__teacher_book__["a" /* TeacherBook */].fromJson(JSON.parse(tb));
        }
        else {
            throw new Error("Box is empty");
        }
    };
    return TeacherBookService;
}());
TeacherBookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], TeacherBookService);

//# sourceMappingURL=teacher-book.service.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rating__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__absence__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherBook; });


var TeacherBook = (function () {
    function TeacherBook() {
        this._studentsNames = [];
        this._ratings = [];
        this._absences = [];
        this._lessonsCount = 0;
    }
    TeacherBook.toJson = function (tb) {
        return {
            ratings: tb._ratings.map(function (r) { return __WEBPACK_IMPORTED_MODULE_0__rating__["a" /* Rating */].toJson(r); }),
            absences: tb._absences.map(function (a) { return __WEBPACK_IMPORTED_MODULE_1__absence__["a" /* Absence */].toJson(a); }),
            studentsNames: tb._studentsNames,
            lessonsCount: tb._lessonsCount
        };
    };
    TeacherBook.fromJson = function (json) {
        var tb = new TeacherBook();
        tb._studentsNames = json.studentsNames;
        tb._absences = json.absences.map(function (a) { return __WEBPACK_IMPORTED_MODULE_1__absence__["a" /* Absence */].fromJson(a); });
        tb._lessonsCount = json.lessonsCount;
        tb._ratings = json.ratings.map(function (r) { return __WEBPACK_IMPORTED_MODULE_0__rating__["a" /* Rating */].fromJson(r); });
        return tb;
    };
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
        var studName = this.studentsNames.find(function (sn) { return sn === studentName; });
        if (!studentName) {
            throw new Error('Enter student name');
        }
        if (studName) {
            throw new Error("Student " + studentName + " is already exist!");
        }
        this._studentsNames.push(studentName);
    };
    TeacherBook.prototype.addLesson = function () {
        this._lessonsCount++;
    };
    TeacherBook.prototype.setRating = function (studentName, lessonNumber, value) {
        if (value < 0) {
            throw new Error("Input value < 0");
        }
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
        var rating = this._ratings.find(function (r) { return r.studentName === studentName && r.lessonNumber === lessonNumber; });
        return rating ? rating.value : null;
    };
    TeacherBook.prototype.isAbsend = function (studentName, lessonNumber) {
        var isAbsend = this._absences.find(function (a) { return a.studentName === studentName && a.lessonNumber === lessonNumber; });
        return !!isAbsend;
    };
    return TeacherBook;
}());

//# sourceMappingURL=teacher-book.js.map

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 71;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(87);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 79:
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
    Absence.toJson = function (absence) {
        return {
            lessonNumber: absence.lessonNumber,
            studentName: absence.studentName
        };
    };
    Absence.fromJson = function (json) {
        return new Absence(json.studentName, json.lessonNumber);
    };
    return Absence;
}());

//# sourceMappingURL=absence.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(145),
        styles: [__webpack_require__(141)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teacher_book_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teacher_book_teacher_book_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assistant_principal_assistant_principal_component__ = __webpack_require__(83);
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
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__teacher_book_teacher_book_component__["a" /* TeacherBookComponent */],
            __WEBPACK_IMPORTED_MODULE_7__assistant_principal_assistant_principal_component__["a" /* AssistantPrincipalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__teacher_book_service__["a" /* TeacherBookService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__teacher_book_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teacher_book__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssistantPrincipal; });


var AssistantPrincipal = (function () {
    function AssistantPrincipal() {
        this._name = '';
    }
    AssistantPrincipal.prototype.setName = function (name) {
        this._name = name;
    };
    AssistantPrincipal.prototype.getName = function () {
        return this._name;
    };
    AssistantPrincipal.prototype.setTeacherBook = function () {
        this._teacherBookService = new __WEBPACK_IMPORTED_MODULE_0__teacher_book_service__["a" /* TeacherBookService */]();
        this._teacherBookService.setKey(this._name);
        if (!this._teacherBookService.isEmpty()) {
            this._teacherBook = this._teacherBookService.getTeacherBook();
        }
        else {
            this._teacherBook = new __WEBPACK_IMPORTED_MODULE_1__teacher_book__["a" /* TeacherBook */]();
        }
    };
    AssistantPrincipal.prototype.getTeacherBook = function () {
        return this._teacherBook;
    };
    AssistantPrincipal.prototype.saveTeacherBook = function () {
        this._teacherBookService.putTeacherBook(this._teacherBook);
    };
    return AssistantPrincipal;
}());

//# sourceMappingURL=assistant-principal.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssistantPrincipalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssistantPrincipalComponent = (function () {
    function AssistantPrincipalComponent() {
    }
    AssistantPrincipalComponent.prototype.setTeacherName = function () {
        this._teacherName = this.teacherName;
    };
    AssistantPrincipalComponent.prototype.getTeacherName = function () {
        return this._teacherName;
    };
    AssistantPrincipalComponent.prototype.renderTeacherBook = function () {
        this.setTeacherName();
    };
    AssistantPrincipalComponent.prototype.isTeacherName = function () {
        return this._teacherName ? true : false;
    };
    AssistantPrincipalComponent.prototype.isInputEmpty = function () {
        return this.teacherName !== '';
    };
    AssistantPrincipalComponent.prototype.ngOnInit = function () {
    };
    return AssistantPrincipalComponent;
}());
AssistantPrincipalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-assistant-principal',
        template: __webpack_require__(146),
        styles: [__webpack_require__(142)]
    }),
    __metadata("design:paramtypes", [])
], AssistantPrincipalComponent);

//# sourceMappingURL=assistant-principal.component.js.map

/***/ }),

/***/ 84:
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
    Rating.toJson = function (rating) {
        return {
            lessonNumber: rating.lessonNumber,
            studentName: rating.studentName,
            value: rating.value
        };
    };
    Rating.fromJson = function (json) {
        return new Rating(json.studentName, json.lessonNumber, json.value);
    };
    return Rating;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 85:
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
            statisticByStudentName.set(studentName, +(sum / Math.min(maxLessonToInclude, teacherBook.lessonsCount)).toFixed(2));
        }
        return statisticByStudentName;
    };
    return TeacherAssistant;
}());

//# sourceMappingURL=teacher-assistant.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teacher_assistant__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assistant_principal__ = __webpack_require__(82);
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
    // constructor(private _teacherBookBox: TeacherBookService) {
    //   this._teacherAssistant = new TeacherAssistant();
    //   if (this._teacherBookBox.isEmpty) {
    //     this._teacherBook = new TeacherBook();
    //   } else {
    //     this._teacherBook = this._teacherBookBox.getTeacherBook();
    //   }
    //   this._vm = { statValuesIndex: 0 };
    // }
    // ngOnInit() {
    //   let tb = localStorage.getItem('teacherBook');
    //   if (tb !== null) {
    //     this._teacherBook = TeacherBook.fromJson(JSON.parse(tb));
    //   } else {
    //     this._teacherBook = new TeacherBook();
    //   }
    // }
    function TeacherBookComponent() {
        this.newStudentName = "";
        this._teacherAssistant = new __WEBPACK_IMPORTED_MODULE_1__teacher_assistant__["a" /* TeacherAssistant */]();
        this._assistantPrincipal = new __WEBPACK_IMPORTED_MODULE_2__assistant_principal__["a" /* AssistantPrincipal */]();
        this._vm = { statValuesIndex: 0 };
    }
    Object.defineProperty(TeacherBookComponent.prototype, "canAddStudent", {
        get: function () {
            var _this = this;
            return this.newStudentName.length > 0 && !this._teacherBook.studentsNames.find(function (s) { return s === _this.newStudentName; });
        },
        enumerable: true,
        configurable: true
    });
    ;
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
                var value = rating != null ? rating.toString() : absence ? "Н" : null;
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
        this._assistantPrincipal.setName(this.teacherName);
        this._assistantPrincipal.setTeacherBook();
        this._teacherBook = this._assistantPrincipal.getTeacherBook();
        // let tb = localStorage.getItem(this._assistantPrincipal.getName());
        // if (tb !== null) {
        //   this._teacherBook = TeacherBook.fromJson(JSON.parse(tb));
        // } else {
        //   this._teacherBook = new TeacherBook();
        // }
    };
    TeacherBookComponent.prototype.ngOnDestroy = function () {
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
        this.newStudentName = "";
    };
    TeacherBookComponent.prototype.addLesson = function () {
        this._teacherBook.addLesson();
    };
    TeacherBookComponent.prototype.addValue = function (studentName, lessonNumber, value) {
        var parsedValue = parseInt(value);
        if (!value) {
            return;
        }
        else if (!Number.isNaN(parsedValue)) {
            this._teacherBook.setRating(studentName, lessonNumber, parsedValue);
        }
        else {
            this._teacherBook.setAbsence(studentName, lessonNumber);
        }
    };
    TeacherBookComponent.prototype.deleteStudent = function (studentName) {
        this._teacherBook.removeStudent(studentName);
    };
    TeacherBookComponent.prototype.setStatValuesIndex = function (lesson) {
        this.vm.statValuesIndex = lesson;
    };
    // public saveTeacherBook(): void {
    //   this._teacherBookBox.putTeacherBook(this._teacherBook);
    // }
    TeacherBookComponent.prototype.saveTeacherBook = function () {
        this._assistantPrincipal.saveTeacherBook();
    };
    return TeacherBookComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], TeacherBookComponent.prototype, "teacherName", void 0);
TeacherBookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-teacher-book',
        template: __webpack_require__(147),
        styles: [__webpack_require__(143)]
    }),
    __metadata("design:paramtypes", [])
], TeacherBookComponent);

//# sourceMappingURL=teacher-book.component.js.map

/***/ }),

/***/ 87:
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

},[172]);
//# sourceMappingURL=main.bundle.js.map