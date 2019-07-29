import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import RecordIcon from '@material-ui/icons/FiberManualRecord';
import IconButton from '@material-ui/core/IconButton';
import merchantsStyle from '../util/merchantsStyle'

const useStyles = makeStyles(merchantsStyle);

const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
let recognition = null
if (SpeechRecognition !== undefined) recognition = new SpeechRecognition();

const SearchInput = props => {
    const [recording, setRecording] = useState(false)
    const [search, setSearch] = useState('')
    const classes = useStyles();

    useEffect(props => {
        if (recording && SpeechRecognition !== undefined) {
            recognition.start()
            recognition.onresult = (event) => {
                const speechToText = event.results[0][0].transcript;
                setSearch(speechToText)
            }
        } else return
    }, [recording])

    useEffect(() => {
        props.getValue(search)
    }, [search])

    return (
        <div className={classes.search}>
            <InputBase
                placeholder="Search…"
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton aria-label="Mic">
                            <SearchIcon className={classes.searchIcon} />
                        </IconButton>
                    </InputAdornment>}
                endAdornment={
                    <InputAdornment position="end">
                        {SpeechRecognition !== undefined && <IconButton aria-label="Mic" onClick={() => setRecording(!recording)}>
                            {recording ? <RecordIcon className={classes.recordIcon} /> : <MicIcon className={classes.searchIcon} />}
                        </IconButton>}
                    </InputAdornment>}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                onChange={e => setSearch(e.target.value)}
                value={search}
            />
        </div>
    )
}

export default SearchInput