class Api::ProductsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def create
        @product = Product.new(product_params)
        if @product.save 
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def index 
        @products = Product.all 
        render :index
    end

    def show
        @product = Product.find_by(id: params[:id])
    end

    def update
        @product = Product.find_by(id: params[:id])

        if @product.update(product_params) ## need to the option to update photos
            render :show # difference between this and render :show --check
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def destroy 
        @product = Product.find_by(id: params[:id])
        if @product.destroy
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    private 

    def product_params
        params.require(:product).permit(:id, :title, :description, :price, :user_id, :id, :quantity, :category)
    end

end
