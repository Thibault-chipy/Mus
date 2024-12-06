public class Equipe{
    private Joueur joueur1;
    private Joueur joueur2;
    private int Score;

    public Equipe(Joueur joueur1, Joueur joueur2){
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.Score = 0;
    }

    public void ajouterScore(int points){
        this.Score += points;
    }

    public int getScore(){
        return this.Score;
    }

   public Joueur[] getJoueurs(){
        return new Joueur[]{this.joueur1, this.joueur2};
    }
}