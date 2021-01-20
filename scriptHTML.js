rock = document.getElementById('rock');
paper = document.getElementById('paper');
scissor = document.getElementById('scissor');

class assign
{
    constructor()
    {
        this.mouseX = 0;
        this.mouseY = 0;
        this.mouseZ = 0;
        this.color = 0;
    }
    colorChange()
    {
        if(this.mouseX == 0)
        {
            while(this.mouseX == 0)
            {
                this.mouseX = Math.floor(Math.random()*3) + 1;
            }
        }
        else if(this.mouseY == 0)
        {
            this.mouseY = this.mouseX;
            while(this.mouseX == this.mouseY)
            {
                this.mouseY = Math.floor(Math.random()*3)+1;
            }
        }
        else if(this.mouseZ == 0)
        {
            this.mouseZ = this.mouseX;
            while((this.mouseZ == this.mouseX ) || (this.mouseZ==this.mouseY))
            {
                this.mouseZ = Math.floor(Math.random()*3)+1;
            }
        }
       
        
    }
    assignColor(id,a)
    {
        if((a == 1))
        {
            id.style.backgroundColor = 'red';
        }
        else if(a==2)
        {
            id.style.backgroundColor = 'blue'
        }
        else if((a==3 ))
        {
            id.style.backgroundColor = 'green';
        }
        else
        {
            id.style.backgroundColor = 'white';
        }

    }
    assignOver(id,check)
    {
        if(check == 1)
        {
            if(this.mouseX == 0)
            {
                this.colorChange();
                this.assignColor(id,this.mouseX);
            }
            else if(this.mouseY == 0)
            {
                this.colorChange();
                this.assignColor(id,this.mouseY);
            }
            else if(this.mouseZ == 0)
            {
                this.colorChange();
                this.assignColor(id,this.mouseZ);
                this.mouseX = 0;
                this.mouseY = 0;
                this.mouseZ = 0;
            }
        }
        else 
        {
            this.assignColor(id,4);
        }
        
        
    }
};


var p = new assign();
rock.addEventListener("mouseover",()=>p.assignOver(rock,1));
paper.addEventListener("mouseover",()=>p.assignOver(paper,1));
scissor.addEventListener("mouseover",()=>p.assignOver(scissor,1));
rock.addEventListener("mouseout",()=>p.assignOver(rock,0));
paper.addEventListener(("mouseout"),()=>p.assignOver(paper,0));
scissor.addEventListener(("mouseout"),()=>p.assignOver(scissor,0));
//rock.addEventListener('click',()=>assignOver(rock,0))
