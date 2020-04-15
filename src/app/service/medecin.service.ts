import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Medecin } from '../models/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  baseUrl = environment.baseUrl;
//baseUrl : 'http://localhost:3000' 
  constructor(private http: HttpClient) { }
  listeMedecins() {
    return this.http.get(this.baseUrl + '/medecin/listeMedecins')
  }
  // medecin=new Medecin()
  
  ajouterMedecin(medecin,image){
    let formData = new FormData();
    formData.append('nom', '' + medecin.nom)
    formData.append('prenom', '' + medecin.prenom)
    formData.append('login', '' + medecin.login)
    formData.append('password', '' + medecin.password)
    formData.append('dateNaissance', '' + medecin.dateNaissance)
    formData.append('adresse', '' + medecin.adresse)
    formData.append('telephone', '' + medecin.telephone)
    formData.append('cin', '' + medecin.cin)
    formData.append('email', '' + medecin.email)
    formData.append('image', image);
    formData.append('adresseCabinet', '' + medecin.adresseCabinet)
    formData.append('specialite', '' + medecin.specialite)


    return this.http.post(this.baseUrl + '/medecin/ajouter', formData)

  }
  afficheParId(id)
  {
  return this.http.get(this.baseUrl+'/medecin/afficheParId/'+id) 
  }
  modifierMedecin(id,medecin,image){

let formData = new FormData();
    formData.append('nom', '' + medecin.nom)
    formData.append('prenom', '' + medecin.prenom)
    formData.append('login', '' + medecin.login)
    formData.append('password', '' + medecin.password)
    formData.append('dateNaissance', '' + medecin.dateNaissance)
    formData.append('adresse', '' + medecin.adresse)
    formData.append('telephone', '' + medecin.telephone)
    formData.append('cin', '' + medecin.cin)
    formData.append('email', '' + medecin.email)
    formData.append('image', image);
    formData.append('adresseCabinet', '' + medecin.adresseCabinet)
    formData.append('specialite', '' + medecin.specialite)

    return this.http.put(this.baseUrl+'/medecin/modifier/'+id,formData)
  }
  supprimerMedecin(id){
    return this.http.delete(this.baseUrl+'/medecin/supprimer/'+id)
  }
}