import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { Trash } from "react-feather";

const AppModal = ({ isOpen, title, setIsModalOpen, singleTask, taskId }) => {
    const { _id } = singleTask || {};
    const [files, setFiles] = useState([]);
    const [responseMessage, setResponseMessage] = useState('');

    if (!isOpen) return null;
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    // Handle file selection
    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };

    // Remove a selected file
    const removeFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    // Upload files when 'files' state changes (useEffect)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (files.length > 0) {
            const uploadFiles = async () => {
                const formData = new FormData();
                files.forEach(file => {
                    formData.append('files', file);
                });

                try {
                    const response = await axios.post(`https://kanban-board-r59f.onrender.com/posts/v1/uploads/${taskId}`, formData, {

                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                    if (response) {
                        setResponseMessage(response.data.message);
                    }
                } catch (error) {
                    setResponseMessage('Error uploading files: ' + error.response?.data?.message || error.message);
                }
            };

            uploadFiles();
        }
    }, [files, _id, taskId]);

    return (
        <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <div className="flex flex-col items-center p-4 border border-dashed border-gray-300 rounded-lg max-w-md mx-auto">
                            <h2 className="text-lg font-semibold mb-4">Upload Multiple Files</h2>

                            {/* File Input */}
                            <input
                                type="file"
                                multiple
                                onChange={handleFileChange}
                                className="hidden"
                                id="file-upload"
                            />
                            <label
                                htmlFor="file-upload"
                                className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                            >
                                Choose Files
                            </label>

                            {/* Display Selected Files */}
                            {files.length > 0 && (
                                <div className="mt-4 w-full">
                                    <h3 className="text-md font-semibold mb-2">Selected Files:</h3>
                                    {
                                        responseMessage && (
                                            <span className={`text-14
                                             ${responseMessage === 'Post_updated_successfully!' ? 'text-green-500' : 'text-red'}
                                             font-medium mb-2`}>
                                                {responseMessage === 'Post_updated_successfully!' ? 'Files uploaded' : responseMessage}
                                            </span>
                                        )
                                    }

                                    <ul className="space-y-2">
                                        {files.map((file, index) => (
                                            <li
                                                key={index}
                                                className="flex justify-between items-center p-2 bg-gray-100 rounded-md shadow-sm"
                                            >
                                                <div className="flex items-center">
                                                    <Image
                                                        src={URL.createObjectURL(file)}
                                                        alt="preview"
                                                        width={400}
                                                        height={300}
                                                        className="w-10 h-10 mr-3 rounded-md object-cover"
                                                    />
                                                    <span className="text-gray-700">{file.name}</span>
                                                </div>
                                                <button
                                                    onClick={() => removeFile(index)}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <Trash />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppModal;
