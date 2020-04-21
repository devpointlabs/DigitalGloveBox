import React from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default class Filepond extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
     };
  }

  refreshPage = () => {
    setTimeout(()=> window.location.reload(false), 7000);  
  }

  handleInit() {
    console.log("FilePond instance has initialised, pond is:", this.pond);
  }

  render() {
    const { route } = this.props;

    return (
      <div className="App"  >
        <FilePond
          ref={(ref) => (this.pond = ref)}
          files={this.state.files}
          allowMultiple={true}
          maxFiles={3}
          server={{
            process: (
              fieldName,
              file,
              metadata,
              load,
              error,
              progress,
              abort,
              transfer,
              options
            ) => {
              const formData = new FormData();
              formData.append(fieldName, file, file.name);

              const request = new XMLHttpRequest();
              request.open("PUT", route);

              request.upload.onprogress = (e) => {
                progress(e.lengthComputable, e.loaded, e.total);
              };

              request.onload = function () {
                if (request.status >= 200 && request.status < 300) {
                  load(request.responseText);
                } else {
                  error("oh no");
                }
              };

              request.send(formData);

              return {
                abort: () => {
                  request.abort();
                  abort();
                },
              };
            },
          }}
          oninit={() => this.handleInit()}
          onupdatefiles={(fileItems) => {
            this.setState({
              files: fileItems.map((fileItem) => fileItem.file),
              
            });
            if(this.props.refresh){
            this.refreshPage()}
          }}
          

        />
      </div>
    );
  }
}
