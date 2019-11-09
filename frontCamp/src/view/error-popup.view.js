class ErrorPopupView {
  render(error) {
    alert(error);
  }
}

const errorPopup = new ErrorPopupView();
Object.freeze(errorPopup);

export default errorPopup;
