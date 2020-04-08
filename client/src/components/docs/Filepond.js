import React from "react";
import axios from "axios";
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
export default class Filepond extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Set initial files, type 'local' means this is a file
      // that has already been uploaded to the server (see docs)
      files: [
        {
          source: "index.html",
          options: {
            type: "local",
          },
        },
      ],
    };
  }

  handleInit() {
    console.log("FilePond instance has initialised, pond is:", this.pond);
  }

  render() {
    const { car_id, server } = this.props;

    return (
      <div className="App">
        {/* Pass FilePond properties as attributes */}

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
              // fieldName is the name of the input field
              // file is the actual file object to send
              const formData = new FormData();
              formData.append(fieldName, file, file.name);

              const request = new XMLHttpRequest();
              request.open("POST", `/api/cars/${car_id}/documents/`);

              // Should call the progress method to update the progress to 100% before calling load
              // Setting computable to false switches the loading indicator to infinite mode
              request.upload.onprogress = (e) => {
                progress(e.lengthComputable, e.loaded, e.total);
              };

              request.onload = function () {
                if (request.status >= 200 && request.status < 300) {
                  // the load method accepts either a string (id) or an object
                  load(request.responseText);
                } else {
                  // Can call the error method if something is wrong, should exit after
                  error("oh no");
                }
              };

              request.send(formData);

              return {
                abort: () => {
                  // This function is entered if the user has tapped the cancel button
                  request.abort();

                  // Let FilePond know the request has been cancelled
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
            //   axios.post(`/api/cars/${car_id}/documents`, this.state).then(res => {
            //     console.log(res.data)
            //  }).catch( (err) => {
            //     console.log(err.response)
            // })
          }}
        />
      </div>
    );
  }
}
