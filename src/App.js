import React, { useState } from 'react';
import { handleInput } from './functioncheck'; 
import './App.css'; 

function App() {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [output, setOutput] = useState([]);
    const [error, setError] = useState(''); 
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const handleProcess = () => {
        if (!name || !position) {
            setError('กรุณากรอกชื่อและตำแหน่ง');
            setIsModalOpen(true);
            return;
        }

        setError('');
        
        const input = [{ name, position }];
        const result = handleInput(input);
        setOutput(result);
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <h1>Programing Testing 2</h1>
            <h1>ระบบค้นหาพนักงาน</h1>
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ระบุชื่อพนักงาน"
                />
                <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    placeholder="ตำเเหน่ง"
                />
                <button onClick={handleProcess}>ค้นหา</button>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        {error ? (
                            <div>
                                <p>{error}</p>
                                <button className="close-modal" onClick={closeModal}>ปิด</button>
                            </div>
                        ) : (
                            <div>
                                <ul>
                                    {output.map((item, index) => (
                                        <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                                    ))}
                                </ul>
                                <button className="close-modal" onClick={closeModal}>ปิด</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
