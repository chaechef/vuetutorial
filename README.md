This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Stack Life! 

In the project directory, you can run:

### Backend
Make & Activate Virtual env:-
``` 
python -m venv venv
(Windows) venv\Scripts\activate
(Linux/Mac) source venv/bin/activate
```
Install Dependencies:-
```
cd backend
pip install -r requirements.txt
```
Make DB Migrations:-
```
python ./manage.py makemigrations
python ./manage.py migrate
```
Create admin:-
```
python manage.py createsuperuser
```
Start server for your REST-API:-
```
python ./manage.py runserver
```
### frontend

```
cd frontend
npm install
npm start
```