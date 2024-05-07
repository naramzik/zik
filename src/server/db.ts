// mysql 모듈 소환
import mariadb from 'mysql2';

// DB 연결 통로 생성
const connection = mariadb.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'NextjsZik',
  dateStrings: true,
});

export default connection;
