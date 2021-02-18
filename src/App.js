import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return(
        <ChatEngine
            height = "100vh"
            projectID = "c5e23a97-e044-4d65-9da5-19de07465c78"
            userName = "farhadrahman1995@gmail.com"
            userSecret = "88742711225566"
            renderChatFeed = {(ChatAppProps) => <ChatFeed { ...ChatAppProps}/>}

        />
    );
}

export default App;