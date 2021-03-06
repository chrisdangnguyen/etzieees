class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password] #,params[:user][:name]
        )

        if @user
            login(@user)
            render "api/users/show" #need to look over this 
        else 
            render json: ["Invalid email/password combination"], status: 401
        end
    end

    def destroy 
        @user = current_user
        if @user 
            logout 
            render "api/users/show" #need to look over this 
        else
            render json: ["Nobody signed in"], status: 404
        end
    end
    
end
