'use client'
import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  Avatar,
  AppBar,
  Toolbar,
  List,
  ListItem,
  Badge,
} from '@mui/material';

import {
  Send as SendIcon,
  MoreVert as MoreVertIcon,
  Phone as PhoneIcon,
  VideoCall as VideoCallIcon,
  AttachFile as AttachFileIcon,
  EmojiEmotions as EmojiIcon
} from '@mui/icons-material';

const ChatApp = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! How are you doing?",
      sender: "Alice",
      timestamp: new Date(Date.now() - 300000),
      isOwn: false,
      avatar: "A"
    },
    {
      id: 2,
      text: "I'm doing great! Just working on some new projects. How about you?",
      sender: "You",
      timestamp: new Date(Date.now() - 240000),
      isOwn: true,
      avatar: "Y"
    },
    {
      id: 3,
      text: "That sounds awesome! I'd love to hear more about your projects sometime.",
      sender: "Alice",
      timestamp: new Date(Date.now() - 180000),
      isOwn: false,
      avatar: "A"
    },
    {
      id: 4,
      text: "Sure! Let's catch up this weekend. Are you free on Saturday?",
      sender: "You",
      timestamp: new Date(Date.now() - 120000),
      isOwn: true,
      avatar: "Y"
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "You",
        timestamp: new Date(),
        isOwn: true,
        avatar: "Y"
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#f5f5f5' }}>
      {/* Header */}
      <AppBar position="static" elevation={1} sx={{ bgcolor: 'white', color: 'text.primary' }}>
        <Toolbar>
          <Avatar sx={{ mr: 2, bgcolor: '#1976d2' }}>A</Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ color: 'text.primary' }}>
              Alice Johnson
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              <Badge color="success" variant="dot" sx={{ mr: 1 }} />
              Online
            </Typography>
          </Box>
          <IconButton color="primary">
            <PhoneIcon />
          </IconButton>
          <IconButton color="primary">
            <VideoCallIcon />
          </IconButton>
          <IconButton color="primary">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Messages Area */}
      <Box sx={{ flexGrow: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 1 }}>
          <List sx={{ py: 0 }}>
            {messages.map((message, index) => (
              <ListItem
                key={message.id}
                sx={{
                  display: 'flex',
                  justifyContent: message.isOwn ? 'flex-end' : 'flex-start',
                  alignItems: 'flex-start',
                  px: 2,
                  py: 1
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: message.isOwn ? 'row-reverse' : 'row',
                    alignItems: 'flex-end',
                    maxWidth: '70%'
                  }}
                >
                  {!message.isOwn && (
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        mr: 1,
                        bgcolor: '#1976d2',
                        fontSize: '0.875rem'
                      }}
                    >
                      {message.avatar}
                    </Avatar>
                  )}
                  
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      bgcolor: message.isOwn ? '#1976d2' : 'white',
                      color: message.isOwn ? 'white' : 'text.primary',
                      borderRadius: message.isOwn 
                        ? '18px 18px 4px 18px' 
                        : '18px 18px 18px 4px',
                      maxWidth: '100%',
                      wordWrap: 'break-word'
                    }}
                  >
                    <Typography variant="body1" sx={{ mb: 0.5 }}>
                      {message.text}
                    </Typography>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        opacity: 0.7,
                        fontSize: '0.75rem'
                      }}
                    >
                      {formatTime(message.timestamp)}
                    </Typography>
                  </Paper>

                  {message.isOwn && (
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        ml: 1,
                        bgcolor: '#4caf50',
                        fontSize: '0.875rem'
                      }}
                    >
                      {message.avatar}
                    </Avatar>
                  )}
                </Box>
              </ListItem>
            ))}
          </List>
          <div ref={messagesEndRef} />
        </Box>
      </Box>

      {/* Input Area */}
      <Paper elevation={3} sx={{ p: 2, bgcolor: 'white' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
          <IconButton color="primary" size="small">
            <AttachFileIcon />
          </IconButton>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            variant="outlined"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '24px',
                bgcolor: '#f5f5f5'
              }
            }}
          />
          <IconButton color="primary" size="small">
            <EmojiIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            sx={{
              bgcolor: newMessage.trim() ? '#1976d2' : 'transparent',
              color: newMessage.trim() ? 'white' : 'inherit',
              '&:hover': {
                bgcolor: newMessage.trim() ? '#1565c0' : 'rgba(25, 118, 210, 0.04)'
              }
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatApp;