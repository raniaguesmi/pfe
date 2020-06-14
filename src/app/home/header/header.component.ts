import { Component, OnInit } from '@angular/core';
import { RdvService } from 'src/app/service/rdv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  utilisateur;
  data;
  type;
  idmedec;
  rdvs
  constructor(private rdvService:RdvService) { }

  ngOnInit() {
   this.data=localStorage.getItem('user')
// console.log('utli',JSON.parse(this.data))
this.utilisateur=JSON.parse(this.data)
this.type=this.utilisateur.type
this.idmedec=this.utilisateur.idmed;
this.rdvEnattente(this.idmedec)
  }
  logOut(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');

  }
rdvEnattente(id){
  this.rdvService.afficheRdvAttente(id).subscribe(res=>{
    this.rdvs=res;
   })
}
supprimerRdv(id){
    Swal.fire({
      title: 'vous êtes sûr  ?',
      text: "Vous ne pourrez pas revenir en arriére !",
    // type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3DABB6',
      cancelButtonColor: '#909193',
      confirmButtonText: 'Oui, Supprimer!',
      cancelButtonText:'Annuler'
    })
      .then((result) => {
        if (result.value) {
      return this.rdvService.supprimerRdv(id)
        .subscribe(res => {
          console.log(res);
          this.rdvEnattente(this.idmedec)
        })
    }
  })
   
  }
accepterRdv(id){
    console.log(id)
this.rdvService.accepterRdv(id).subscribe(res=>{
      console.log(res)
      Swal.fire(
        'Bien',
        'Rendez-vous  accepté!',
        'success'
      )     })
      
  }




}
