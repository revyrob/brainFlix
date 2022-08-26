import "../FormField/FormField"; //uses the same scss file as FormField.scss because they both have the same styling but different layouts
import Button from "../Button/Button";
import commentIcon from "../../assets/Icons/add_comment.svg";

//form field for tablet/desktop since the input and button are in a different order compared to the
//mobile
function FormFieldTablet() {
  return (
    <form method="post" className="formField__wrapper--tablet">
      <div className="formField__user--div">
        <div className="formField__user"></div>
      </div>
      <div className="formField__wrapper--input">
        <div className="formField__action">
          <input
            type="text"
            placeholder="Add a new comment"
            name="comment"
            className="formField__input"
          ></input>
        </div>
      </div>
      <Button
        className="formField__btn"
        icon={commentIcon}
        alt="comment"
        text="COMMENT"
        type="submit"
      />
    </form>
  );
}
export default FormFieldTablet;
