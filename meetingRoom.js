import { api, LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import CurrentPageReference from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {
  @api meetingRoomInfo; //{roomNAme , roomCapacity}
  // @wire(CurrentPageReference) pageReference;

  tileClickHandler() {
    const tileClicked = new CustomEvent('tileclick', {
      detail: this.meetingRoomInfo
    });
    this.dispatchEvent(tileClicked);
    // fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);
  }
}
