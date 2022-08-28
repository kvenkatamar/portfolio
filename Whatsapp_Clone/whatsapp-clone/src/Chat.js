import MoreVert from "@mui/icons-material/MoreVert";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { Avatar, IconButton } from "@mui/material";
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import React from "react";
import "./Chat.css";

function Chat() {
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar />

                <div className="chat-headerInfo">
                <h3>Room name</h3>
                <p>Last seen at....</p>
                </div>

                <div className="chat-headRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            
            <div className="chat-body">
                <p className="chat-message">
                    <span className="chat-name">Venkat</span>
                    This is a message
                    <span className="chat-timestamp">{new Date().toLocaleTimeString().slice(0, 4)}{(new Date().getHours>=12)? " PM":" AM"}</span>
                </p>
                <p className="chat-message chat-receiver">
                    <span className="chat-name">Venkat</span>
                    This is a message
                    <span className="chat-timestamp">{new Date().toLocaleTimeString().slice(0, 4)}{(new Date().getHours>=12)? " PM":" AM"}</span>
                </p>
                <p className="chat-message">
                    <span className="chat-name">Venkat</span>
                    This is a message
                    <span className="chat-timestamp">{new Date().toLocaleTimeString().slice(0, 4)}{(new Date().getHours>=12)? " PM":" AM"}</span>
                </p>
            </div>
            <div className="chat-footer">
                <IconButton>
                    <SentimentSatisfiedOutlinedIcon />
                </IconButton>
                <form action="">
                    <input placeholder="Type a message" type="text" />
                    <button type="submit">
                        <IconButton>
                            <SendIcon />                            
                        </IconButton>
                    </button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Chat;
