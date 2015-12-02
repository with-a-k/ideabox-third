class ClientController < ApplicationController
  def index
    @ideas = Idea.all
  end
end
