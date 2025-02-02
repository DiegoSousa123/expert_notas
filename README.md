# Expert Notas 
## Desenvolvido durante a NLW Expert  da Rocketseat

Veja online: https://simple-audio-notas.onrender.com/

**_Importante_: Projeto sem fins lucrativos**
### Tecnologias utilizadas: 
- React
- TailwindCSS
- Radix UI
- Sonner
- date-fns
- SpeechRecognition API

### Descrição:
Aplicação web para criação de notas, com a possibilidade de transcrição de áudio para texto utilizando a API SpeechRecognition.

Features: 
- Criar, editar e remover notas
- Buscar notas
- Criar nota de texto através de áudio

### Screenshots:
![](https://private-user-images.githubusercontent.com/34814235/408869063-835b98d9-ef07-4c65-9efe-d45c41233ced.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg1MDIzNzIsIm5iZiI6MTczODUwMjA3MiwicGF0aCI6Ii8zNDgxNDIzNS80MDg4NjkwNjMtODM1Yjk4ZDktZWYwNy00YzY1LTllZmUtZDQ1YzQxMjMzY2VkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjAyVDEzMTQzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQxYjQ1NmQyMWFiYmUyNTE4ODkzYjMzZWRjNzNhNjk1NTBkN2QyNjQ2ZDEwYTAxMmY5NDdlM2FiZDg2YjU3MjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ZLJAUxyW5GtmZ8zhM-hRQmjdaQnP5AdPwRlaX6sWH54)

![](https://private-user-images.githubusercontent.com/34814235/408869062-5a38cba4-dc55-4c85-a669-3441a9decda3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg1MDIzNzIsIm5iZiI6MTczODUwMjA3MiwicGF0aCI6Ii8zNDgxNDIzNS80MDg4NjkwNjItNWEzOGNiYTQtZGM1NS00Yzg1LWE2NjktMzQ0MWE5ZGVjZGEzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjAyVDEzMTQzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZjOTlkOWRlNzcxMTAxMjQyMzJlMWM1ZGYwY2UxNTNhOTdiOTk2ZmU4OTA0NDM0NDMwZTY4NTZiOWFhNmM3M2MmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.G3VhfNodCOePjllCn9rLPzvjbum9gtzHTd_pRlM4ULg)

![](https://private-user-images.githubusercontent.com/34814235/408869059-323536a0-3c33-4ea0-8003-74babe2c89ba.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg1MDI4NzAsIm5iZiI6MTczODUwMjU3MCwicGF0aCI6Ii8zNDgxNDIzNS80MDg4NjkwNTktMzIzNTM2YTAtM2MzMy00ZWEwLTgwMDMtNzRiYWJlMmM4OWJhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjAyVDEzMjI1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIyNjExYjMzYWFmMGM0YTM0ZGVhYjk4ZGM3OGIzMmExYmQ1ZmU3MTQwNDg5MjdjZmNlNmMzYTNiNzkxZjAwZDAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.6bMqYyahzxlF9EYPnUMkJA0ZaRkxtMCL1IlPajANTqU)
