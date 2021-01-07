({
  doInit: function (component, event, helper) {
    component.set('v.meetingRoomsInfo', [
      { roomName: 'A-01', roomCapacity: 12 },
      { roomName: 'A-02', roomCapacity: 10 },
      { roomName: 'A-03', roomCapacity: 2 },
      { roomName: 'B-01', roomCapacity: 22 },
      { roomName: 'B-02', roomCapacity: 16 },
      { roomName: 'B-03', roomCapacity: 20 }
    ]);
  },

  handleTileClick: function (component, event, helper) {
    component.set('v.selectedMeetingRoom', event.getParam('roomName'));
  }
});
