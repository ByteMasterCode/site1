import React, {ChangeEvent, useEffect, useState} from "react";
import style from './styles.module.css';
import logo from '../../resources/img/logo_white.svg'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Job} from "../../model/Job";
import Cookies from "universal-cookie";
import {useTranslation} from "react-i18next";
import {Alert, Stack} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

export default function Vacansy() {


    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [work, setWork] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [jobs, setJobs] = useState<Job[]>([]);
    const [t,i18n] = useTranslation("global");
    const changePhone = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };
    const changeDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };
    const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const changeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose2 = () =>{
        setOpen2(false);
    }
    const handleback = ()=>{
        setOpen(false);
    }
    const handleClose = () => {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {name: name, phone: phone, work: work, description: description, email: email},
            )
        };
        console.log(name,phone,work,description,email);
        fetch('https://laravel.navoiyuran.uz/api/job', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();


                if (!response.ok) {

                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }


            })
            .catch(error => {

                console.error('There was an error!', error);
            });

        setOpen2(true);
        setOpen(false);
    };

    const cookies = new Cookies();
    const lang =cookies.get('lang')
    useEffect(() => {
        fetch(`https://laravel.navoiyuran.uz/api/jobs/?lang=${lang}`, {method: "GET", headers: {'Accept': 'application/json'}})
            .then(async (response) => response.json())
            .then((data) => {
                console.log(data);

                setJobs(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])
    return (
        <div className={style.container}>
            <h1 className={'text-[32px] font-bold ml-4 border-l-4 pl-2 mb-2 border-green-400'}> {t("Work.header")}</h1>
            <div className={style.wrapper}>
                {jobs.map((value =>
                        <>
                            <div className={style.vacansy_item} onClick={() => {

                                setWork( t("Work.modal.work")+ value.name + "  "+  t("Work.modal.department") + value.department);
                                handleClickOpen()
                            }}>
                                <div className={'flex mt-4 flex-row border-b-1 pb-2 border-b-2'}>
                                    <img className={'ml-6  bg-green-400 rounded-lg'} width={'70px'} height={'70px'}
                                         src={logo}/>
                                    <div
                                        className={'ml-5 text-[20px] self-center uppercase font-bold'}>{value.name}</div>
                                </div>
                                <div
                                    className={'w-fit bg-green-400 rounded-lg mt-1 ml-2 text-[12] text-white pl-2 pr-2'}>{value.department}
                                </div>
                                <div className={'p-2'}>{value.description}
                                </div>
                            </div>

                            <Dialog open={open} onClose={handleClose}>

                                <DialogContent>
                                    <DialogContentText>
                                       <div className={'bg-green-400 rounded-lg text-white p-1'}> {work}</div>
                                        <br/>
                                         Work Description
                                    </DialogContentText>
                                    <TextField
                                        onChange={changeName}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label={t("Work.modal.name")}
                                        type="name"
                                        fullWidth
                                        variant="standard"
                                    />
                                    <TextField
                                        onChange={changeEmail}

                                        margin="dense"
                                        id="name"
                                        label={t("Work.modal.email")}
                                        type="email"
                                        fullWidth
                                        variant="standard"
                                    />
                                    <TextField
                                        onChange={changePhone}
                                        margin="dense"
                                        id="phone"
                                        label={t("Work.modal.phone")}
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                    />
                                    <TextField
                                        onChange={changeDescription}
                                        margin="dense"
                                        id="description"
                                        label={t("Work.modal.description")}
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button  onClick={handleback}>{t("Work.modal.back")}</Button>
                                    <Button  onClick={handleClose}>{t("Work.modal.accept")}</Button>
                                </DialogActions>
                            </Dialog>

                            <Stack spacing={2} sx={{ width: '100%' }}>
                                <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
                                    <Alert onClose={handleClose2} severity="success" sx={{ width: '100%' }}>
                                        {t("Work.modal.message")}
                                    </Alert>
                                </Snackbar>
                            </Stack>
                        </>
                ))

                }
            </div>
        </div>
    )
}