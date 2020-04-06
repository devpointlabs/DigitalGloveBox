import React from 'react'
import axios from 'axios'
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
            type: "local"
          }
        }
      ]
    };
  }
  
  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  render() {
    const { car_id }  = this.props
    return (
      <div className="App">
        {/* Pass FilePond properties as attributes */}
        <FilePond
          ref={ref => (this.pond = ref)}
          files={this.state.files}
          allowMultiple={true}
          maxFiles={3}
          server={`/api/cars/${car_id}/documents`}
          oninit={() => this.handleInit()}
          onupdatefiles={fileItems => {
            // Set currently active file objects to this.state
            this.setState({
              files: fileItems.map(fileItem => fileItem.file)
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