import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props:any) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index:any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event:any, newValue:any) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1,  bgcolor: 'background.paper', width:'100%', alignItems:"center", display: 'flex' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Ish faoliyati" {...a11yProps(0)} />
                <Tab label="Tarjimai holi" {...a11yProps(1)} />

            </Tabs>
            <TabPanel value={value} index={0}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, ut.
            </TabPanel>
            <TabPanel value={value} index={1}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea maiores maxime quasi sunt!
            </TabPanel>

        </Box>
    );
}