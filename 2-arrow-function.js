const event = {
  name : 'Birthday Party',
  guestlist: ['Preeti','Yash','Yashika'],
  printGuestList() {
    console.log('Guest list for ' + this.name);

    this.guestlist.forEach((guest) => {
      console.log(guest + '  is attenting '+this.name);
    })

  }
}

event.printGuestList();
