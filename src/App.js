import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {

    return(
        <ChatEngine
            height= "100vh"
            projectID="026a865a-cd3b-4e2d-818e-a2311f3a6cf4"
            userName="karim"
            userSecret="123123"
            reendrChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
    
    );
            
}

export default App;

