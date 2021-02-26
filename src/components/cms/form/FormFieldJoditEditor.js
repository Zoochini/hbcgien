import React, { Component } from "react";
import JoditEditor from "jodit-react";

export class FormFieldJoditEditor extends Component {
  render() {
    let { name, label, value, onChange } = this.props;

    let config = {
      readonly: false,
      minHeight: 600,
      maxHeight: 2160,
    };

    return (
      <div className="form-group col-lg-12">
        <label for={name}>{label} :</label>
        <JoditEditor
          ref={React.createRef(null)}
          name={name}
          value={value}
          config={config}
          tabIndex={-1}
          onBlur={onChange}
        />
      </div>
    );
  }
}

export default FormFieldJoditEditor;
