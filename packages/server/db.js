const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    // await mongoose.connect("mongodb://admin:123456@localhost:27017/user-actions", {
    await mongoose.connect('mongodb://localhost:27017/user-actions', {
      useNewUrlParser: true,
    });
    console.log('数据库连接成功');
  } catch (error) {
    console.error('数据库连接错误:', error.message);
    process.exit(1); // 连接错误时退出进程
  }
}

// 监听 SIGINT 信号（Ctrl+C）并优雅地关闭数据库连接
process.on('SIGINT', gracefullyShutdown);

// 监听 SIGTERM 信号（系统关闭）并优雅地关闭数据库连接
process.on('SIGTERM', gracefullyShutdown);

async function gracefullyShutdown() {
  try {
    await mongoose.connection.close();
    console.log('数据库连接已关闭');
    process.exit(0);
  } catch (error) {
    console.error('关闭数据库连接时发生错误:', error.message);
    process.exit(1); // 关闭连接出错时仍然退出进程
  }
}

connectToDatabase();
