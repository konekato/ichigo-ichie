'use strict';

module.exports = function (socket, io) { 
    /*
    入室メッセージをクライアントに送信する
    引数 data = {
        userName: <ユーザ名>,
    }
    */
    socket.on('enter', function (data) {
        if (!data.userName) {
            return;
        }

        // socket ID 取得
        const userId = socket.id;
        const message = `${data.userName}（id: ${userId}）さんが入室しました`;
        data.userId = userId;
        data.message = message;
        socket.broadcast.emit('receiveEnterEvent', data);
    });
};
