import { useRef } from "react";


export default function UploadBtn() {

    const fileInputRef = useRef(null);

    // Handle click and emulate input click
    const handleFileSelect = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            console.log(selectedFile);
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    console.log(e.target.result);
                    // this.setState({ data: JSON.parse(e.target.result) });
                } catch (error) {
                    console.error('Erreur lors de la lecture du fichier JSON :', error);
                }
            };
            reader.readAsText(selectedFile);

        } else {
            console.log('No file selected.');
        }
    };

    return (
        <div
            onClick={handleFileSelect}
            className="bg-[#162538] text-white floated-btn">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                </svg>
                <span  className="ml-2 leading-none font-bold">
                    Importer un fichier
                </span>
                <input
                    type="file"
                    accept=".json"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}/>
        </div>
    );
}