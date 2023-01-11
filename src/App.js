import React from "react";
import { ChatEngine } from "react-chat-engine";

import "./App.css";

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="0772835b-f0a9-4223-94d0-6d17331d5c69"
            userName="bambang"
            userSecret="abcde"  
        />
    );
}

export default App;