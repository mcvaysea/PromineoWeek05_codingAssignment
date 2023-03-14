
/////////////////////////////////////////////////////////////////
//////////////Promineo Week 5: Coding Assignment////////////////
///////////////////////////////////////////////////////////////


//////////////
// Sean McVay
/////////////



//++++++++++++++++++++++++++++++++++++++
// Class create for new Cellsite build
//+++++++++++++++++++++++++++++++++++++

class Site {
  constructor(name, sectorId) {
    this.name = name;
    this.sectorId = sectorId;
  }
}

//++++++++++++++++++++++++++++++++++++++++
// Class create for new cell sector build
//+++++++++++++++++++++++++++++++++++++++

class Sector {
  constructor(name) {
    this.name = name;
    this.sectors = [];
  }

  addSite(cell) {
    if (cell instanceof Site) {
      this.sectors.push(cell);
    } else {
      throw new Error(
        `You can only enter a name of the Site. Argument is not a valid Site name: ${cell}`
      );
    }
  }
}

//++++++++++++++++++++++++++++++++++++++++++++++++
// Menu options for CellSite and CellSector build
//+++++++++++++++++++++++++++++++++++++++++++++++

class Menu {
  constructor() {
    this.sites = [];
    this.selectedSector = null;
  }

  start() {
    let selection = this.showMainMenuOptions();

    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createSite();
          break;
        case "2":
          this.viewSite();
          break;
        case "3":
          this.deleteSite();
          break;
        case "4":
          this.displaySite();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }

    alert(`Program Ended...`);
  }

  showMainMenuOptions() {
    return prompt(`
        0) exit
        1) create new site
        2) view site
        3) delete site
        4) view all sites
    `);
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++
  // Menu options for Alpha/Beta/Gamma sector build
  //+++++++++++++++++++++++++++++++++++++++++++++++

  showSectorMenuOptions(sectorFace) {
    {
      return prompt(`
        0) back
        1) create sector
        2) delete sector
        ----------------------
        ${sectorFace}
    `);
    }
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++++
  // Main menu function options for cell build/remove
  //+++++++++++++++++++++++++++++++++++++++++++++++++

  displaySite() {
    let siteString = "";
    for (let i = 0; i < this.sites.length; i++) {
      siteString += i + `) ` + this.sites[i].name + "\n";
    }

    alert(siteString);
  }

  createSite() {
    let name = prompt("Enter name for new site:");
    this.sites.push(new Sector(name));
  }

  viewSite() {
    let index = prompt(`Enter the site index you wish to view:`);
    if (index > -1 && index < this.sites.length) {
      this.selectedSector = this.sites[index];
      let description = "Sector Name: " + this.selectedSector.name + "\n";
      for (let i = 0; i < this.selectedSector.sectors.length; i++) {
        description +=
          i +
          ") " +
          this.selectedSector.sectors[i].name +
          " + " +
          this.selectedSector.sectors[i].sectorId +
          "\n";
      }

      let selection = this.showSectorMenuOptions(description);
      switch (selection) {
        case "1":
          this.createSector();
          break;
        case "2":
          this.deleteSector();
      }
    }
  }

  deleteSite() {
    let index = prompt(`Enter the index of the site you wish to delete:`);
    if (index > -1 && index < this.sites.length) {
      this.sites.splice(index, 1);
    }
  }

  //++++++++++++++++++++++++++++++++++++++++++++++
  // Sub menu functions for cellSector add/delete
  //+++++++++++++++++++++++++++++++++++++++++++++

  createSector() {
    let name = prompt(`Enter 'alpha', 'beta', 'gamma' for new sector name:`);
    let sectorId = prompt(
      `Enter '1' for Alpha face, '2' for Beta face, '3' for Gamma sectorId:`
    );
    this.selectedSector.sectors.push(new Site(name, sectorId));
  }

  deleteSector() {
    let index = prompt(`Enter the index of the sector you wish to delete:`);
    if (index > -1 && index < this.selectedSector.sectors.length) {
      this.selectedSector.sectors.splice(index, 1);
    }
  }
}

let menu = new Menu();
menu.start();
