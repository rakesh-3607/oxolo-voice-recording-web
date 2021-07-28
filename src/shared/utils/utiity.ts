export const ensureMediaPermissions = () => {
    return navigator.mediaDevices.enumerateDevices().then((devices) => {
        return devices.every((device) => {
            return !(device.deviceId && device.label);
        });
    }).then((shouldAskForMediaPermissions) => {
        if (shouldAskForMediaPermissions) {
            return navigator.mediaDevices.getUserMedia({ audio: true/* , video: true */ }).then((mediaStream) => {
                mediaStream.getTracks().forEach((track) => {
                    track.stop();
                });
            });
        }
    });
};