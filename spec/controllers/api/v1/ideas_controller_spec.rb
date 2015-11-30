require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do
  describe "GET index" do
    it "returns 200" do
      5.times do
        Idea.create(title: "Filler", body: "takin' up space")
      end
      get :index, format: :json
      expect(response.code).to eq("200")
    end

    # Don't just have an idea. Have ALL of them.
    it "returns all the ideas" do
      5.times do
        Idea.create(title: "Filler", body: "takin' up space")
      end
      get :index, format: :json
      expect(JSON.parse(response.body).count).to eq(5)
    end
  end

  describe "POST create" do
    it "returns the new object" do
      post :create, format: :json, idea: { title: "Request", body: "Achieved" }
      expect(JSON.parse(response.body)["title"]).to eq("Request")
      expect(JSON.parse(response.body)["body"]).to eq("Achieved")
    end
  end

  describe "PATCH update" do
    it "fails if either title or body is made empty" do
      idea = Idea.create(title: "Replace These", body: "With Other Stuff")
      patch :update, id: idea.id, format: :json, idea: { title: "", body: "Shouldn't Work" }
      expect(response.code).to eq("204")
      updated_idea = Idea.find_by(id: idea.id)
      expect(updated_idea.title).to eq("Replace These")
      expect(updated_idea.body).to eq("With Other Stuff")
      patch :update, id: idea.id, format: :json, idea: { title: "Empty Fields", body: "" }
      expect(response.code).to eq("204")
      updated_idea = Idea.find_by(id: idea.id)
      expect(updated_idea.title).to eq("Replace These")
      expect(updated_idea.body).to eq("With Other Stuff")
    end

    it "otherwise succeeds, returning a No Content response" do
      idea = Idea.create(title: "Attack Noding", body: "Love them nodes")
      patch :update, id: idea.id, format: :json, idea: { title: "Thinking with Portals", body: "But don't overthink" }
      expect(response.code).to eq("204")
      updated_idea = Idea.find_by(id: idea.id)
      expect(updated_idea.title).to eq("Thinking with Portals")
      expect(updated_idea.body).to eq("But don't overthink")
    end
  end

  describe "DELETE destroy" do
    it "removes the item from the database" do
      idea = Idea.create(title: "Finish This!", body: "4 Killograms")
      delete :destroy, id: idea.id, format: :json
      expect(response.code).to eq("204")
      updated_idea = Idea.find_by(id: idea.id)
      expect(updated_idea).to be_nil
    end
  end
end
